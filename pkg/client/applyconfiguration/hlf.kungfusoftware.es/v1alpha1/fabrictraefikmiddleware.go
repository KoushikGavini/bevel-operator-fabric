/*
 * Copyright Kungfusoftware.es. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
// Code generated by applyconfiguration-gen. DO NOT EDIT.

package v1alpha1

// FabricTraefikMiddlewareApplyConfiguration represents an declarative configuration of the FabricTraefikMiddleware type for use
// with apply.
type FabricTraefikMiddlewareApplyConfiguration struct {
	Name      *string `json:"name,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
}

// FabricTraefikMiddlewareApplyConfiguration constructs an declarative configuration of the FabricTraefikMiddleware type for use with
// apply.
func FabricTraefikMiddleware() *FabricTraefikMiddlewareApplyConfiguration {
	return &FabricTraefikMiddlewareApplyConfiguration{}
}

// WithName sets the Name field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Name field is set to the value of the last call.
func (b *FabricTraefikMiddlewareApplyConfiguration) WithName(value string) *FabricTraefikMiddlewareApplyConfiguration {
	b.Name = &value
	return b
}

// WithNamespace sets the Namespace field in the declarative configuration to the given value
// and returns the receiver, so that objects can be built by chaining "With" function invocations.
// If called multiple times, the Namespace field is set to the value of the last call.
func (b *FabricTraefikMiddlewareApplyConfiguration) WithNamespace(value string) *FabricTraefikMiddlewareApplyConfiguration {
	b.Namespace = &value
	return b
}
